type Props = {};
export default function useCounter({}: Props): {
    counter: number;
    increment: () => void;
    decrement: () => void;
};
export { useCounter };
