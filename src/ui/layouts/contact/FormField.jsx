import { PropTypes } from "prop-types";

const FormField = ({ className = "", children }) => {
  return <div className={`${className} grid gap-y-3`}>{children}</div>;
};

export const Label = ({ htmlFor, className = "", children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} hidden xs:block font-medium text-base md:text-lg text-center xs:text-left`}
    >
      {children}
    </label>
  );
};

export const Input = ({
  type,
  name,
  id = name,
  value,
  onChange,
  disabled,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`${className} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300  xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg placeholder:font-main placeholder:text-base outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed`}
    />
  );
};

export const Textarea = ({
  name,
  id = name,
  value,
  onChange,
  disabled,
  placeholder,
  rows,
  className = "",
}) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      className={`${className} w-full px-0.5 xs:px-6 py-3.5 bg-inherit border-b-2 border-gray-300 xs:bg-white xs:rounded-lg font-medium text-base sm:text-lg placeholder:font-main placeholder:text-base outline-none focus:border-primary-400 xs:focus:border-none xs:focus:ring-1 xs:focus:ring-primary-400 disabled:bg-gray-300 disabled:text-gray-600 disabled:cursor-not-allowed`}
    ></textarea>
  );
};

FormField.Label = Label;
FormField.Input = Input;
FormField.Textarea = Textarea;

FormField.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
Textarea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  className: PropTypes.string,
};

export default FormField;