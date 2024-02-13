export const Button = ({ text, action, type }) => {
  return (
    <button
      type={type}
      onClick={action}
      className={
        'px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-sky-100 hover:text-black'
      }
    >
      {text}
    </button>
  );
};
