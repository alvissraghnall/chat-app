import WelcomeSVG from "./chat/WelcomeSVG";

const Welcome = () => (
    <div className='lg:col-span-2 lg:block bg-white dark:bg-gray-900'>
        <div className='text-3xl font-bold ml-3 pl-2'>
          <WelcomeSVG />

          <div className="text-center">
            <h2 className="text-xl text-gray-500 dark:text-gray-400">
                Select a Chat to Start Messaging
            </h2>
          </div>
        </div>

    </div>
);

export default Welcome;

