const BenefitCard = ({
    title,
    description,
    icon,
    // imgPath,
    darkMode = true,
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
            className="flex h-[350px] flex-1 flex-col justify-between gap-10 rounded-lg p-10"
            style={{
                // backgroundImage: `url(${imgPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: backgroundColor,
            }}>
            <div className="text-slate-900" justify-center>
                {icon}
            </div>
            <div>
                <h1 className="font-medium text-slate-900">{title}</h1>
                <p className="text-xs font-extralight text-slate-900">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BenefitCard;
