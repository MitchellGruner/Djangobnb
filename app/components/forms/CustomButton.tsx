interface CustomButtonProps {
    onClick: () => void;
    label: string;
    className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    label,
    className
}) => {
    return (
        <div onClick={onClick} 
        className={`py-4 bg-airbnb hover:bg-airbnb-dark transition ease-in-out duration-500 text-white text-center rounded-xl cursor-pointer ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;