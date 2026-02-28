const Modal = ({ title, onClose, isOpen, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="relative w-full max-w-lg 
                rounded-3xl overflow-hidden
                bg-[#111414]
                shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                border border-emerald-500/20
                transform transition-all duration-300 scale-100">

                {/* Top Accent Glow Bar */}
                <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-green-500 to-teal-400" />

                {/* Header */}
                <div className="flex justify-between items-center px-7 py-6">
                    <h2 className="text-2xl font-bold text-white tracking-wide">
                        {title}
                    </h2>

                    <button
                        onClick={onClose}
                        className="h-10 w-10 flex items-center justify-center
                        rounded-full bg-[#1c1f1f]
                        text-gray-400 hover:text-white
                        hover:bg-red-500/20
                        transition-all duration-200 text-2xl"
                    >
                        &times;
                    </button>
                </div>

                {/* Body */}
                <div className="px-7 pb-8 text-gray-300">
                    {children}
                </div>

                {/* Subtle Outer Glow */}
                <div className="absolute -inset-1 rounded-3xl 
                    bg-gradient-to-r from-emerald-500/10 to-teal-500/10
                    blur-xl opacity-40 -z-10" />
            </div>
        </div>
    );
};

export default Modal;