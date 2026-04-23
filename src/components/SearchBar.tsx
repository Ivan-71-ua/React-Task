import { memo, type RefObject } from "react";

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    inputRef: RefObject<HTMLInputElement | null>;
}

const SearchBar = ({ value, onChange, onClear, inputRef }: SearchBarProps) => {
    return (
        <div className="search-box">
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Пошук за предметом, викладачем або групою"
                className="search-input"
            />
            <button
                type="button"
                onClick={onClear}
                className="search-button"
            >
                Очистити
            </button>
        </div>
    );
};

export default memo(SearchBar);