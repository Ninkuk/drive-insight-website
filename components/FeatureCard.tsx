import { Card, CardContent } from "@/components/ui/card"; // Adjust import if needed


const FeatureCard = ({ 
	title, 
	icon, 
	description,
 }:{
	title: string;
	icon: React.ReactNode;
	description: string;
 }) => {
    return (
        <Card className="rounded-2xl text-center shadow-md">
            <CardContent className="flex flex-col items-center p-4">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-2 text-lg font-semibold">
                    {title}
                </h3>
                <p className="mt-1 text-sm">
                    {description}
                </p>
            </CardContent>
        </Card>
    );
};

export default FeatureCard;
