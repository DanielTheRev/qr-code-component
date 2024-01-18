import './App.css';

function App() {
	return (
		<div className='flex flex-col gap-2 h-screen justify-center items-center font-Outfit p-4 bg-Light-Gray'>
			<div className='flex flex-col gap-4 bg-white rounded-[20px] p-4 max-w-xs '>
				<img src='./image-qr-code.png' alt='' className='rounded-[10px]' />
				<div className='flex flex-col gap-2 p-2'>
					<h1 className='text-2xl text-center font-bold'>
						Improve your front-end skills by building projects
					</h1>
					<div className='text-center text-gray-400 text-[15px]'>
						Scan the QR code to visit Frontend Mentor and take your coding skills to the next
						level
					</div>
				</div>
			</div>
			<div className='text-[12px] font-bold text-center text-blue-400 p-1'>
					<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
						Challenge by Frontend Mentor
					</a>
					. Coded by <a href='https://github.com/DanielTheRev'>Daniel Larrosa</a>.
				</div>
		</div>
	);
}

export default App;
