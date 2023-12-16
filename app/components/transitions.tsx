'use client'
import { motion } from 'framer-motion';

const transitionVariant = {
    initial: {
        y: '0%',
        height: '0%'
    },
    animate: {
        y: ['0%', '0%', '100%'],
        height: ['0%', '100%', '100%']
    }
};
const transitionOut = {
    initial: {
        y: '0%',
        height: '0%'
    },
    animate: {
        y: ['0%', '0%'],
        height: ['0%', '100%']
    }
}
const transitionIn = {
    initial: {
        y: '0%',
        height: '100%'
    },
    animate: {
        y: ['0%', '100%'],
        height: ['100%', '100%']
    }
}

export const OutTransitions = () => {
    return (
        <>
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-0 z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.1, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-0 z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.5, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[10%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.2, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[10%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.6, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[20%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.3, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[20%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.7, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[30%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.4, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[30%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.8, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.5, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.9, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.5, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.9, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[50%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.6, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[50%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[60%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.7, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[60%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.1, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[70%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.8, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[70%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.2, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[80%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 0.9, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[80%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.3, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[90%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[90%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.4, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[100%] z-[30] bg-yellow-900 rounded"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.1, duration: 1.2, ease: 'circIn'}}
            />
            <motion.div
                className="fixed h-screen w-[10vw] top-0 left-[100%] z-[30] bg-red-700"
                variants={transitionOut}
                initial="initial"
                animate="animate"
                transition={{delay: 1.5, duration: 1.2, ease: 'circIn'}}
            />
        </>
    );
};
export const InTransitions = () => {
    return (
        <>
            <motion.div exit='exit'>
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-0 z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.1, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-0 z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[10%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.2, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[10%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.1, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[20%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.3, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[20%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.2, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[30%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.4, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[30%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.3, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.5, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.4, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.6, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[40%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.5, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[50%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.7, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[50%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.6, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[60%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.8, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[60%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.7, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[70%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.9, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[70%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.8, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[80%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 1, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[80%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 0.9, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[90%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 1.1, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[90%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 1, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[100%] z-[30] bg-yellow-900 rounded"
                    variants={transitionIn}
                    initial="initial"
                    animate="animainTransitionste"
                    transition={{delay: 1.2, duration: 1.2, ease: 'circIn'}}
                />
                <motion.div
                    className="fixed h-screen w-[10vw] top-0 left-[100%] z-[30] bg-red-700"
                    variants={transitionIn}
                    initial="initial"
                    animate="animate"
                    transition={{delay: 1.1, duration: 1.2, ease: 'circIn'}}
                />
            </motion.div>
        </>
    );
};