import Button from "../common/Button";

export default function SortButton({
    onClick,
    label = "Sort"
}) {
    return (
        <Button
            variant="secondary"
            onClick={onClick}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 md:w-auto"
        >
            <span className="material-symbols-outlined text-lg">
                tune
            </span>

            {label}
        </Button>
    );
}
