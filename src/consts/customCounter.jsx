import React, {useState, useEffect} from 'react'

const AnimatedCounter = ({ initial, target,intervaltime}) => {

    const [value, setValue] = useState(initial);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setValue((prevCount) => {
                if (prevCount >= target) {
                    clearInterval(interval);
                    return target;
                }
                return prevCount + 1;
            });
        },intervaltime);

        return () => clearInterval(interval);
    }, [target]);

    return <span>{value}</span>
}

export default AnimatedCounter;