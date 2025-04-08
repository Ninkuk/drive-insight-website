import CompatibilityForm from "@/components/CompatibilityForm";

const Compatibility = () => {
    return (
        <div className="container flex flex-col gap-5 lg:px-60">
            <div className="flex flex-col items-center gap-2">
                <h1>Ready to get started?</h1>
                <p>Check here if your car is compatible with our device.</p>
            </div>
            <CompatibilityForm />
        </div>
    );
};

export default Compatibility;
