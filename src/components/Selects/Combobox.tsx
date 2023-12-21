import { useCombobox } from 'downshift';
import { ChangeEvent, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Options } from '../interfaces/selectInterface';

interface ISelectSearch {
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  idLabel?: string;
  label?: string;
  required?: boolean;
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
  required,
  options,
  valueSelected,
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
        <label className="w-fit" htmlFor={idLabel}>
          {label} {required ? <span>*</span> : ''}
        </label>
        <div className="icx-relative icx-text-gray-400">
          <div
            className="icx-text-gray-700 icx-absolute icx-top-1/2 icx-cursor-pointer icx--translate-y-1/2 icx-right-3 icx-flex icx-justify-end"
            aria-label="toggle menu"
            {...getToggleButtonProps({ onClick: handleInputClick })}
          >
            <IoIosArrowDown className="icx-text-disable-300" />
          </div>
          <input
            className={`icx-w-full icx-py-1.5 icx-pl-4 icx-rounded-lg icx-outline-none ${estiloInput} ${inputClassName} icx-pr-10`}
            placeholder={placeholder}
            {...getInputProps({ onBlur: handleInputChange, onClick: handleInputClick })}
            id={idLabel}
          />
        </div>
      </div>
      <ul
        className={`icx-absolute icx-bg-white icx-mt-1 icx-shadow-lg icx-w-full icx-max-h-80 icx-z-10 icx-top-11 icx-rounded-lg icx-border icx-overflow-auto icx-text-sm ${
          !(isOpen || stateOptions.length === 0) ? 'icx-hidden' : ''
        }`}
        {...getMenuProps({ ref: listRef })}
      >
        {isOpen && stateOptions.length > 0 ? (
          stateOptions.map((option, index) => (
            <li
              className={`${highlightedIndex === index ? 'icx-bg-primary-400' : ''} ${
                selectedItem === option ? 'icx-font-bold' : ''
              } ${index === 0 ? 'icx-rounded-t-lg' : ''} ${
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
