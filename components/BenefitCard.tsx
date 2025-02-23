const BenefitCard = ({
    title,
    description,
    icon,
    // imgPath,
    backgroundColor,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    // imgPath: string;
    darkMode?: boolean;
    backgroundColor: string;
}) => {
    return (
        <div
            className="flex flex-1 flex-col justify-between gap-10 rounded-lg p-10"
            style={{
                // backgroundImage: `url(${imgPath})`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                backgroundColor: backgroundColor,
            }}>
            <div className="text-slate-900" justify-center>
                {icon}
            </div>
            <div>
                <h2 className="font-medium text-slate-900">{title}</h2>
                <p className="text-xs font-extralight text-slate-900">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;
