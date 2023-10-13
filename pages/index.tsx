import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Footer from './Footer'
import Link from 'next/link'


const inter:object = Inter({ subsets: ['latin'] })

export default function Home() {
	const router = useRouter()
	const icons = 
	{
		frontendCardIcons: [
			["HTML 5", <svg key={"1"} className='mx-auto' xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 32 32"><path fill="#e44f26" 
				d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30L5.902 27.201z"/>
				<path fill="#f1662a" d="m16 27.858l8.17-2.265l1.922-21.532H16v23.797z"/>
				<path fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83l
				.759 8.517H16v-3.091zm0 8.027l-.014.004l-3.442-.929l-.22-2.465H9.221l.433 
				4.852l6.332 1.758l.014-.004v-3.216z"/><path fill="#fff" 
				d="M15.989 13.407v3.091h3.806l-.358 4.009l-3.448.93v3.216l6.337-1.757l.046-.522l.726-8.137l.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694l.141-1.567l.074-.83h-7.743z"/>
				</svg>
			],
			["CSS 3", <svg key={"2"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="80" 
				height="80" viewBox="0 0 135 135"><path fill="#1572B6" d="M18.814 114.123L8.76 
				1.352h110.48l-10.064 112.754l-45.243 12.543l-45.119-12.526z"/>
				<path fill="#33A9DC" d="m64.001 117.062l36.559-10.136l8.601-96.354h-45.16v106.49z"/>
				<path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 
				3.711l-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018v-14.39z"/>
				<path fill="#fff" d="m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881H81.127z"/>
				<path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711h16.447z"/>
				</svg>
			],
			["ECMAScript 6", <svg key={"3"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 128 128"><path fill="#F0DB4F" 
				d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" 
				d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237z"/>
				</svg>
			],
			["Axios", <svg key={"4"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 24 24"><path fill="currentColor" 
				d="M11.068 2.9v19.397L8.954 24V7.864H4.975L11.068 2.9zM14.934 0v15.767h4.091l-6.2 5.089V1.469L14.935 0z"/>
				</svg>
			],
			["ReactJS", <svg key={"5"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 256 228"><path fill="#00D8FF" 
				d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"/>
				</svg>
			],
			["NextJS 13", <svg key={"6"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 24 24"><path fill="none" 
				stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" 
				strokeWidth="2" d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"/>
				</svg>
			],
			["Bootstrap", <svg key={"7"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 256 204"><path fill="#7E13F8" 
				d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z"/>
				</svg>
			],
			["Tailwind CSS", <svg key={"8"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 128 128"><path fill="#38bdf8" 
				d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602c-6.399 8.536-13.867 11.735-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597c-6.399 8.531-13.867 11.73-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"/>
				</svg>
			]
		],
		backendCardIcons: [
			["Java", <svg key={"9"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 128 128"><path fill="#0074BD" 
				d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092c0 0 2.871 1.795 6.873 3.351c-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6c0 0 1.993 2.025 5.132 3.131c-29.542 8.64-62.446.68-41.309-6.336z"/>
				<path fill="#EA2D2E" 
				d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58c0 .001-42.731 10.67-22.324 34.187z"/>
				<path fill="#0074BD" 
				d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171c-4.451-1.938 3.899-4.625 6.526-5.192c2.739-.593 4.303-.485 4.303-.485c-4.953-3.487-32.013 6.85-13.743 9.815c49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326c9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958c10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285c-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725c0-.002.359-.327.468-.617z"/>
				<path fill="#EA2D2E" 
				d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559c-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/>
				<path fill="#0074BD" 
				d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436c0 0-1.571 4.032-18.577 7.231c-19.186 3.612-42.854 3.191-56.887.874c0 .001 2.875 2.381 17.647 3.331z"/>
				</svg>
			],
			["Spring", <svg key={"10"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 128 128"><path fill="#77bc1f" 
				d="M116.452 6.643a59.104 59.104 0 0 1-6.837 12.136A64.249 64.249 0 0 0 64.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0 0 19.945 46.562l2.368 2.1a64.22 64.22 0 0 0 41.358 15.122c33.487 0 61.637-26.24 64.021-59.683c1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 0 1-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502c0-3.017 2.485-5.501 5.487-5.501c1.25 0 2.485.433 3.452 1.234c2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02c0 0-3.852.234-7.721.867c0 0 1.45-.617 3.335-1.334c15.226-5.301 22.43-6.335 31.685-11.086c17.427-8.869 34.654-28.274 38.24-48.463c-6.637 19.422-26.75 36.11-45.077 42.895c-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78c12.291-4.735 24.048-2.134 37.323-5.302c14.175-3.367 30.568-14.004 37.238-27.874c7.471 22.19 16.46 56.932.35 78.405z"/>
				</svg>
			],
			["MySQL", <svg key={"11"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 128 128"><path fill="#00618A" 
				d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341c-1.273.537-3.305.552-3.513 2.147c.7.733.809 1.829 1.365 2.731c1.07 1.73 2.876 4.052 4.488 5.268c1.762 1.33 3.577 2.751 5.465 3.902c3.358 2.047 7.107 3.217 10.34 5.268c1.906 1.21 3.799 2.733 5.658 4.097c.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585c-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367c2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073c-4.37-3.72-9.138-7.437-14.048-10.537c-2.724-1.718-6.089-2.835-8.976-4.292c-.971-.491-2.677-.746-3.318-1.562c-1.517-1.932-2.342-4.382-3.511-6.633c-2.449-4.717-4.854-9.868-7.024-14.831c-1.48-3.384-2.447-6.72-4.293-9.756c-8.86-14.567-18.396-23.358-33.169-32c-3.144-1.838-6.929-2.563-10.929-3.513c-2.145-.129-4.292-.26-6.438-.391c-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854c1.434 1.982 3.269 4.207 4.293 6.438c.674 1.467.79 2.938 1.367 4.489c1.417 3.822 2.652 7.98 4.487 11.511c.927 1.788 1.949 3.67 3.122 5.268c.718.981 1.951 1.413 2.145 2.927c-1.204 1.686-1.273 4.304-1.95 6.44c-3.05 9.615-1.899 21.567 2.537 28.683c1.36 2.186 4.567 6.871 8.975 5.073c3.856-1.57 2.995-6.438 4.098-10.732c.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514c2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755c-1.527-1.497-3.225-3.358-4.487-5.073c-3.556-4.827-6.698-10.11-9.561-15.609c-1.368-2.627-2.557-5.523-3.709-8.196c-.444-1.03-.438-2.589-1.364-3.122c-1.263 1.958-3.122 3.542-4.098 5.854c-1.561 3.696-1.762 8.204-2.341 12.878c-.342.122-.19.038-.391.194c-2.718-.655-3.672-3.452-4.683-5.853c-2.554-6.07-3.029-15.842-.781-22.829c.582-1.809 3.21-7.501 2.146-9.172c-.508-1.666-2.184-2.63-3.121-3.903c-1.161-1.574-2.319-3.646-3.124-5.464c-2.09-4.731-3.066-10.044-5.267-14.828c-1.053-2.287-2.832-4.602-4.293-6.634c-1.617-2.253-3.429-3.912-4.683-6.635c-.446-.968-1.051-2.518-.391-3.513c.21-.671.508-.951 1.171-1.17c1.132-.873 4.284.29 5.462.779c3.129 1.3 5.741 2.538 8.392 4.294c1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975c4.536 1.378 8.601 3.523 12.292 5.854c11.246 7.102 20.442 17.21 26.732 29.269c1.012 1.942 1.45 3.794 2.341 5.854c1.798 4.153 4.063 8.426 5.852 12.488c1.786 4.052 3.526 8.141 6.05 11.513c1.327 1.772 6.451 2.723 8.781 3.708c1.632.689 4.307 1.409 5.854 2.34c2.953 1.782 5.815 3.903 8.586 5.855c1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513c.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294c-.484-.509-.555-1.147-.975-1.755c-.556-.811-1.635-1.272-2.339-1.952z"/>
				</svg>
			],
			["Hibernate", <svg key={"12"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" 
				width="80" height="80" viewBox="0 0 256 267"><path fill="#59666C" 
				d="m153.671 178.933l-.932 2.757l49.137 83.342l2.781 1.968L256 178.22l-51.342-89.137l-50.986 89.85ZM50.273.304L0 89.084l52.234 89.849l49.738-89.85l-.134-3.63L52.565 2.11L50.273.304Z"/>
				<path fill="#BCAE79" 
				d="m50.273.304l51.7 88.78h102.684L152.601.304H50.273Zm1.961 178.629L102.864 267h101.793l-50.986-88.067H52.234Z"/>
				</svg>
			],
			["Swagger", <svg key={"13"} className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 128 128"><path fill="#85ea2d" d="M63.999 124.945c-33.607 0-60.95-27.34-60.95-60.949C3.05 30.388 30.392 3.048 64 3.048s60.95 27.342 60.95 60.95c0 33.607-27.343 60.946-60.95 60.946z"/><path fill="#173647" d="M40.3 43.311c-.198 2.19.072 4.454-.073 6.668c-.173 2.217-.444 4.407-.888 6.596c-.615 3.126-2.56 5.489-5.24 7.458c5.218 3.396 5.807 8.662 6.152 14.003c.172 2.88.098 5.785.394 8.638c.221 2.215 1.082 2.782 3.372 2.854c.935.025 1.894 0 2.978 0v6.842c-6.768 1.156-12.354-.762-13.734-6.496a39.329 39.329 0 0 1-.836-6.4c-.148-2.287.097-4.577-.074-6.864c-.492-6.277-1.305-8.393-7.308-8.689v-7.8c.441-.1.86-.174 1.302-.223c3.298-.172 4.701-1.182 5.414-4.43a37.512 37.512 0 0 0 .616-5.536c.247-3.569.148-7.21.763-10.754c.86-5.094 4.01-7.556 9.254-7.852c1.476-.074 2.978 0 4.676 0v6.99c-.714.05-1.33.147-1.969.147c-4.258-.148-4.48 1.304-4.8 4.848zm8.195 16.193h-.099c-2.462-.123-4.578 1.796-4.702 4.258c-.122 2.485 1.797 4.603 4.259 4.724h.295c2.436.148 4.527-1.724 4.676-4.16v-.245c.05-2.486-1.944-4.527-4.43-4.577zm15.43 0c-2.386-.074-4.38 1.796-4.454 4.159c0 .149 0 .271.024.418c0 2.684 1.821 4.406 4.578 4.406c2.707 0 4.406-1.772 4.406-4.553c-.025-2.682-1.823-4.455-4.554-4.43Zm15.801 0a4.596 4.596 0 0 0-4.676 4.454a4.515 4.515 0 0 0 4.528 4.528h.05c2.264.394 4.553-1.796 4.701-4.429c.122-2.437-2.092-4.553-4.604-4.553Zm21.682.369c-2.855-.123-4.284-1.083-4.996-3.79a27.444 27.444 0 0 1-.811-5.292c-.198-3.298-.174-6.62-.395-9.918c-.516-7.826-6.177-10.557-14.397-9.205v6.792c1.304 0 2.313 0 3.322.025c1.748.024 3.077.69 3.249 2.634c.172 1.772.172 3.568.344 5.365c.346 3.57.542 7.187 1.157 10.706c.542 2.904 2.536 5.07 5.02 6.841c-4.355 2.929-5.636 7.113-5.857 11.814c-.122 3.223-.196 6.472-.368 9.721c-.148 2.953-1.181 3.913-4.16 3.987c-.835.024-1.648.098-2.583.148v6.964c1.748 0 3.347.1 4.946 0c4.971-.295 7.974-2.706 8.96-7.531c.417-2.658.662-5.34.737-8.023c.171-2.46.148-4.946.394-7.382c.369-3.815 2.116-5.389 5.93-5.636a5.161 5.161 0 0 0 1.06-.245v-7.801c-.64-.074-1.084-.148-1.552-.173zM64 6.1c31.977 0 57.9 25.92 57.9 57.898c0 31.977-25.923 57.899-57.9 57.899c-31.976 0-57.898-25.922-57.898-57.9C6.102 32.023 32.024 6.101 64 6.101m0-6.1C28.71 0 0 28.71 0 64c0 35.288 28.71 63.998 64 63.998c35.289 0 64-28.71 64-64S99.289.002 64 .002Z"/></svg>]
		]
	}

	const redirect = (path:string) => {
		router.replace(path)
	}
	

  return (
    <>
      <Head>
        <title>Portafolio - Mathias Ledesma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main 
				className="w-full"
				>
				<nav 
					className='fixed top-0 md:bottom-0 md:right-0 h-16 md:h-auto md:w-72 
					w-full bg-gray-950/90 flex flex-row md:flex-col justify-center 
					md:text-3xl text-xl z-10'
					>
						<a 
							href="#sobremi"
							className='w-max mx-auto md:my-3 my-auto'
							>
							Sobre mi
						</a>
						<a 
							href="#habilidades" 
							className='w-max mx-auto md:my-3 my-auto'
							> 
							Habilidades
						</a>
						<a 
							href="#proyectos" 
							className='w-max mx-auto md:my-3 my-auto'
							>
							Proyectos
						</a>
						<Link 
							href="/blog" 
							className='w-max mx-auto md:my-3 my-auto'
							>
							Blog
						</Link>
						<a 
							href="#contacto" 
							className='w-max mx-auto md:my-3 my-auto'
							>
							Contacto
						</a>
				</nav>
        <div 
					className='h-screen md:w-lessrbar flex flex-col justify-center 
					sm:justify-end bg-black/60 sm:bg-black/25'
					>
					<h1 
						className='mx-auto ml-5 md:mr-20 md:ml-24 md:pr-16 
						md:pr-40 w-fit text-5xl md:text-8xl opacity-80'
						>
						Mathias Ledesma
					</h1>
					<div 
						className='mx-auto md:ml-48 mt-3 md:mb-20 pl-20 md:pl-40 
						mb-10 mt-5 w-fit opacity-80'
						>
						<p 
							className='overflow-hidden whitespace-nowrap border-r-4 
								border-blue-500 w-0 m-0 m-auto animate-typing text-4xl md:text-6xl'
							>
							Desarrollador Full-Stack
						</p>
					</div>
				</div>
				<section 
					className='h-max md:w-lessrbar flex flex-col bg-gray-950/90 
						mt-10 px-12 md:px-20 py-12 md:relative'
					>
					<a id="sobremi"></a>
					<h3 
						className='text-4xl md:text-5xl mb-12  md:mt-20 mx-auto md:mx-0'
						>
						Sobre mi
					</h3>
					<Image 
						className='md:absolute md:right-20 md:top-12 mx-auto  rounded-xl'
						src={"https://github.com/Mathi21as/portafolio/blob/main/public/resources/foto.jpg"} 
						alt='my photo' 
						width={170} 
						height={170}
						/>
					<p className='mt-12 md:mt-20 text-xl md:text-3xl mx-auto pb-8'>
						Soy un apasionado del desarrollo web en 
						el cual tengo conocimientos y experiencia en el campo del front-end. 
						Hace unos años descubrí la programación y estudie de manera 
						autodidacta adquiriendo habilidades en esta área. Aunque tengo los 
						conocimientos para ser un desarrollador front-end, me gusta más la 
						lógica que el diseño, por lo que decidí comenzar a estudiar temas 
						relacionados al área de back-end y realizar proyectos para tener 
						experiencia al momento de trabajar como back-end o full-stack.
					</p>
				</section>
				<a id="habilidades"></a>
				<section 
					className='h-screen90 md:w-lessrbar bg-gray-950/90 mt-10 px-12 md:px-20 
					py-12 md:relative'
					>
					<h3 
						className='text-4xl md:text-5xl mb-12 w-max mx-auto md:mx-0'
						>
						Habilidades
					</h3>

					<div className='w-full flex flex-col md:flex-row gap-16'>
						<div className="flip-card mx-auto w-11/12 md:w-6/12 h-64 md:h-96">
						  <div className="flip-card-inner">
								<div 
									className="flip-card-front bg-center flex flex-col justify-center 
									bg-[url('/resources/frontend.png')] bg-gray-950/10 bg-cover"
								>
									<h1 
										className='text-3xl md:text-5xl bg-black/50 h-full flex 
											flex-col justify-center text-white'
										>
											Frontend
										</h1>
						    </div>
						    <div 
									className="flip-card-back py-10 grid grid-cols-2 gap-8 p-14 
										overflow-scroll overflow-x-hidden justify-center bg-gray-950"
									>
						      {
										
										icons.frontendCardIcons.map((ico:any, index:number) => {
											return (
												<div className="flex flex-col gap-4 justify-center" key={index}>
													{ico[1]}
													<p className="py-8 mx-auto md:text-xl">{ico[0]}</p>
												</div>
											)
										})
									}
						    </div>
						  </div>
						</div>
				
						<div className="flip-card mx-auto w-11/12 md:w-6/12 h-64 md:h-96">
							  <div className="flip-card-inner">
							    <div 
										className="flip-card-front bg-center flex flex-col 
											justify-center bg-[url('/resources/backend.png')] 
											bg-gray-950/10 bg-cover"
									>
							      <h1 
											className='text-3xl md:text-5xl bg-black/50 h-full flex 
												flex-col justify-center text-white'
										>
											Backend
										</h1>
							    </div>
							    <div 
										className="flip-card-back py-10 grid grid-cols-2 gap-4 p-14 
											overflow-scroll overflow-x-hidden justify-center bg-gray-950"
									>
							      {
											icons.backendCardIcons.map((ico:any, index:number) => {
												return (
													<div className="flex flex-col gap-4 justify-center" key={index}>
														{ico[1]}
														<p className="py-8 mx-auto md:text-xl">{ico[0]}</p>
													</div>
												)
											})
										}
							    </div>
							  </div>
						</div> 
					</div>

				</section>
				<a id="proyectos"></a>
				<section 
					className='h-screen90 md:w-lessrbar bg-gray-950/90 my-10 px-12 md:px-20 
					py-12 md:relative'
					>
					<h3
						className='text-4xl md:text-5xl mb-12 mx-auto w-max md:mx-0'
					>
						Proyectos
					</h3>
					<div className='overflow-scroll w-full h-5/5 md:h-4/5 md:overflow-y-hidden flex flex-col md:flex-row gap-8'>
						<div className='shrink-0 rounded-xl basis-10/12 bg-[url("/resources/projects/fastnotes.png")] bg-center bg-cover'>
							<div className='mx-auto w-max my-44'></div>
						</div>
						<div className='shrink-0 rounded-xl basis-10/12 bg-[url("/resources/projects/weathernow.png")] bg-center bg-cover'>
						<div className='mx-auto w-max my-44'></div>
						</div>
						<div className='shrink-0 rounded-xl basis-10/12 bg-[url("/resources/projects/hardsoft.png")] bg-center bg-cover'>
						<div className='mx-auto w-max my-44'></div>
						</div>
						<div className='shrink-0 basis-max'>
							<button className='mb-5 rounded-xl md:pb-3 pt-3 md:my-40 w-full md:px-10 md:w-56 bg-blue-950/50' 
							onClick={()=>redirect('/projects')}>
								<p>Ver más <span className='hidden md:inline'>&gt;</span></p>
								<p className='animate-bounce md:hidden'>v</p>
							</button>
						</div>
					</div>
				</section>
				<a id="contacto"></a>
				<Footer main_page_style={"md:w-lessrbar"} />
      </main>
    </>
  )
}
