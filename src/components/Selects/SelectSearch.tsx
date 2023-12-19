import { useCombobox } from 'downshift';
import { Dispatch, SetStateAction, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Options } from '../interfaces/selectInterface';

interface ISelectSearch {
  disabled?: boolean;
  placeholder?: string;
  inputClassName?: string;
  idLabel?: string;
  label?: string;
  required?: boolean;
  options: Options[];
  valueSelected: Options;
  setValueSelected: Dispatch<SetStateAction<Options>>;
}

export const SelectSearch = ({
  disabled,
  inputClassName,
  label,
  idLabel,
  required,
  options,
  valueSelected,
  setValueSelected,
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

  const { isOpen, getInputProps, getMenuProps, getItemProps, getToggleButtonProps, highlightedIndex, selectedItem } =
    useCombobox({
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
          setValueSelected(newSelectedItem);
        }
      },
    });

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
            {...getToggleButtonProps()}
          >
            <IoIosArrowDown className="icx-text-disable-300" />
          </div>
          <input
            className={`icx-w-full icx-py-1.5 icx-pl-4 icx-rounded-lg icx-outline-none ${estiloInput} ${inputClassName} icx-pr-10`}
            placeholder={placeholder}
            id={idLabel}
            {...getInputProps()}
          />
        </div>
      </div>
      <ul
        className={`icx-absolute icx-bg-white icx-mt-1 icx-shadow-lg icx-w-full icx-max-h-80 icx-z-10 icx-top-11 icx-rounded-lg icx-border ${
          !(isOpen && stateOptions.length) ? 'icx-hidden' : ''
        }`}
        {...getMenuProps()}
      >
        {isOpen
          ? stateOptions.map((option, index) => (
              <li
                className={`${highlightedIndex === index ? 'icx-bg-primary-400' : ''} ${
                  selectedItem === option ? 'icx-font-bold' : ''
                } ${index === 0 ? 'icx-rounded-t-lg' : ''} ${
                  index === stateOptions.length - 1 ? 'icx-rounded-b-lg' : ''
                } icx-py-1 icx-px-3`}
                key={option.value}
                {...getItemProps({ item: option, index })}
              >
                {option.label}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};
