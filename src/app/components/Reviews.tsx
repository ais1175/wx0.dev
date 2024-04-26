import { cn } from "../utils/cn";
import { CardStack } from "./card-stack";
export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-700/[0.2] dark:text-indigo-500 px-1 py-0.5",
                className
            )}
        >
            {children}
        </span>
    );
};
const CARDS = [
    {
        id: 0,
        name: "Hazazi",
        designation: "Reviewed AntiCheat in #reviews",
        content: (
            <p>
                I really like this anti-cheat, <Highlight>very cheap price</Highlight>, <Highlight>excellent support</Highlight>.
                I look forward to new and interesting products to buy.
            </p>
        ),
    },
    {
        id: 1,
        name: "royi",
        designation: "Reviewed Drug System in #reviews",
        content: (
            <p>
                This drug system is <Highlight>one of the best of fivem</Highlight> and it has a spectacular price
            </p>
        ),
    },
    {
        id: 2,
        name: "2tapstep",
        designation: "Reviewed AntiCheat in #reviews",
        content: (
            <p>
                <Highlight>The coolest dev I've met</Highlight>. Provides <Highlight>incredibly good customer service</Highlight>, as well as really skilled to talk to can clearly recommend his things
            </p>
        ),
    },
    {
        id: 3,
        name: "Maverick",
        designation: "Reviewed AntiCheat in #reviews",
        content: (
            <p>
                Works well <Highlight>easy to configure</Highlight> and code is well written!
            </p>
        ),
    },
    {
        id: 4,
        name: "macoooo",
        designation: "Reviewed Anticheat in #reviews",
        content: (
            <p>
                The best thing ever, <Highlight>very affordable</Highlight>, works really well, owner is such a king he’s so <Highlight>frendly</Highlight> he helped me literally with everything and also updates the AC often!
            </p>
        ),
    },
];



export default function Reviews() {
    return (
        <CardStack items={CARDS} />
    );
}