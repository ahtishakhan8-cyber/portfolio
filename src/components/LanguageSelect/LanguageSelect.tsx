import dropdownIcon from '../../assets/dropdown-icon.svg'
import './LanguageSelect.css'

export type LanguageOption = {
  value: string
  label: string
}

type LanguageSelectProps = {
  label: string
  value: string
  options: LanguageOption[]
  onChange: (value: string) => void
}

function LanguageSelect({ label, value, options, onChange }: LanguageSelectProps) {
  const selectedLabel = options.find((option) => option.value === value)?.label

  return (
    <span className="language-select">
      <span className="language-select__value" aria-hidden="true">
        {selectedLabel}
      </span>
      <img
        className="language-select__icon"
        src={dropdownIcon}
        alt=""
        aria-hidden="true"
      />
      <select
        className="language-select__input"
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </span>
  )
}

export default LanguageSelect
