import Lottie from 'react-lottie';
import animationData from '../../assets/SpinningPlanet.json'

const AnimationLoading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div className="p-10 my-72 w-full bg-white flex flex-col justify-center items-center">
            <Lottie options={defaultOptions} height={250} width={250} />
            <div className='flex justify-center items-center'>
                <h2>Loading your cities...</h2>
            </div>
        </div>
    )
}

export default AnimationLoading