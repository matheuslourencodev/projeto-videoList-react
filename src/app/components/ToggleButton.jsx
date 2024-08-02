const ToggleButton = ({ isActive, onClick, label }) => {
    return (
      <button
        className={`rounded px-3 py-2 font-semibold ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'} hover:bg-blue-400 hover:text-white transition-colors duration-300 focus:outline-none`}
        onClick={onClick}
      >
        {label}
      </button>
    );
  };
  
  export default ToggleButton;