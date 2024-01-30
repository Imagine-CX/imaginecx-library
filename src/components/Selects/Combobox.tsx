import { useCombobox } from 'downshift';
import { ChangeEvent, CSSProperties, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Options } from '../interfaces/selectInterface';

interface ISelectSearch {
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  idLabel?: string;
  label?: string;
  labelClassName?: string;
  required?: boolean;
  style?: CSSProperties;
  messageNotFound?: string;
  options: Options[];
  valueSelected: Options;
  onValueSelected: (newValue: Options) => void;
}

export const Combobox = ({
  disabled,
  inputClassName,
  label,
  idLabel,
  labelClassName,
  required,
  options,
  valueSelected,
  style,
  onValueSelected,
  messageNotFound = 'No se encontro',
  placeholder = '',
}: ISelectSearch) => {
  const [stateOptions, setStateOptions] = useState<Options[]>(options);

  const estiloInput: string = disabled ? 'icx-input-disabled' : 'icx-input-active';

  const getFilterOptions = (inputValue: string | undefined) => {
    let lowerCaseInputValue: string | undefined = undefined;
    if (typeof inputValue === 'string') {
      lowerCaseInputValue = inputValue.toLowerCase();
    }
    return function optionsFilter(option: Options) {
      return !lowerCaseInputValue || option.label.toLowerCase().includes(lowerCaseInputValue);
    };
  };

  const {
    isOpen,
    getInputProps,
    getMenuProps,
    getItemProps,
    getToggleButtonProps,
    highlightedIndex,
    selectedItem,
    setInputValue,
    closeMenu,
  } = useCombobox({
    items: stateOptions,
    onInputValueChange({ inputValue }) {
      setStateOptions(options.filter(getFilterOptions(inputValue)));
    },
    itemToString(item) {
      return item ? item.label : '';
    },
    selectedItem: valueSelected,
    onSelectedItemChange: ({ selectedItem: newSelectedItem }) => {
      if (newSelectedItem) {
        onValueSelected(newSelectedItem);
      }
    },
  });

  const styleHover = (index: number) => (highlightedIndex === index ? 'icx-bg-primary-400' : '');
  const styleSelected = (option: Options) => (selectedItem === option ? 'icx-font-bold' : '');

  const listRef = useRef<HTMLUListElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(value.toLowerCase()));

    if (!filteredOptions.find((option) => option.label.toLowerCase() === value.toLowerCase())) {
      closeMenu();

      setInputValue(selectedItem ? selectedItem.label : '');
    } else {
      setInputValue(value);
    }
  };

  const handleInputClick = () => {
    setStateOptions(options);

    setTimeout(() => {
      if (selectedItem && listRef.current) {
        const selectedElement = listRef.current.querySelector(`[data-item-index="${options.indexOf(selectedItem)}"]`);
        selectedElement?.scrollIntoView({ block: 'nearest' });
      }
    }, 0);
  };

  return (
    <div className="icx-flex icx-flex-col icx-gap-8 icx-relative">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-1">
        <label className={`icx-w-fit ${labelClassName}`} htmlFor={idLabel}>
          {label} {required ? <span>*</span> : ''}
        </label>
        <div className="icx-relative icx-text-gray-400">
          <div
            className={`icx-text-gray-700 icx-absolute icx-top-1/2 icx--translate-y-1/2 icx-right-3 icx-flex icx-justify-end ${
              disabled ? 'icx-cursor-not-allowed' : 'icx-cursor-pointer'
            }`}
            aria-label="toggle menu"
            {...getToggleButtonProps({ onClick: handleInputClick, disabled: disabled })}
          >
            <IoIosArrowDown className="icx-text-disable-300" />
          </div>
          <input
            className={`icx-w-full icx-py-1.5 icx-pl-4 icx-rounded-lg icx-outline-none ${estiloInput} ${inputClassName} icx-pr-10`}
            placeholder={placeholder}
            style={style}
            {...getInputProps({ onBlur: handleInputChange, onClick: handleInputClick })}
            id={idLabel}
            disabled={disabled}
          />
        </div>
      </div>
      <ul
        className={`icx-absolute icx-bg-white icx-mt-1 icx-shadow-lg icx-w-full icx-max-h-80 icx-z-10 icx-top-11 icx-rounded-lg icx-border icx-overflow-auto icx-text-sm ${
          !isOpen ? 'icx-hidden' : ''
        }`}
        {...getMenuProps({ ref: listRef })}
      >
        {isOpen && stateOptions.length > 0 ? (
          stateOptions.map((option, index) => (
            <li
              className={`${styleHover(index)} ${styleSelected(option)} ${index === 0 ? 'icx-rounded-t-lg' : ''} ${
                index === stateOptions.length - 1 ? 'icx-rounded-b-lg' : ''
              } icx-py-1 icx-px-3 icx-block`}
              key={option.value}
              {...getItemProps({ item: option, index, 'data-item-index': index })}
            >
              {option.label}
            </li>
          ))
        ) : isOpen ? (
          <li className="icx-py-1 icx-px-3 icx-block">{messageNotFound}</li>
        ) : null}
      </ul>
    </div>
  );
};
