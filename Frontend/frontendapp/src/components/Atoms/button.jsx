export default function MainButton({ children, primary, style }) {
  return (
    <button
      className={`${
        primary
          ? "border border-red-500 bg-red-600 text-white" 
          : "border border-primary-100 bg-tertiary-300 text-primary-100"
      } p-5 text-lg uppercase font-body font-bold md:px-[34px] md:py-5 lg:w-50 ${style}`}
      style={{borderRadius:'30px',}}
    >
      {children}
    </button>
  );
}

export function Button({ children, style, buttonStyle }) {
  return (
    <button
      className={`${buttonStyle ? buttonStyle : "bg-transparent text-primary-100 hover:bg-primary-100 hover:text-white"} w-fit h-fit border border-primary-100 py-3.5 px-6 font-body font-medium transition-all duration-200 ease-in ${style}`}
    >
      {children}
    </button>
  );
}
