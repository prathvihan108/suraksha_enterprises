"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // REQUIRED for default styles

import {
	Droplets,
	Flame,
	RefreshCw,
	GlassWater,
	CheckCircle,
} from "lucide-react";

export default function About() {
	return (
		<>
			<div className="relative w-full h-[200px] sm:h-[400px] md:h-[450px] mt-20 bg-white">
				<div className="absolute -top-1 left-0 w-full overflow-hidden leading-none z-10">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-24"
					>
						<path
							d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
							fill="white"
						/>
					</svg>
				</div>

				<Image
					src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229528/contact-bg_ae9zuk.jpg"
					alt="Background"
					fill
					className="object-cover object-center z-0"
				/>

				<div className="absolute inset-0 flex items-center justify-center z-10">
					<h1 className="text-4xl md:text-5xl font-bold text-black">
						About Us
					</h1>
				</div>

				{/* Bottom wave */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
					<svg
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
						className="w-full h-24"
					>
						<path
							d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>

			<section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white">
				{/* Image */}
				<div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
					<Image
						src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229824/about-graphic_udtivm.png"
						alt="Water Bottle and Ice Cubes"
						width={500}
						height={500}
						className="object-contain"
					/>
				</div>

				{/* Text content */}
				<div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
						We’re Committed to <br />
						Delivering Safe and Pure <br />
						Water for a Healthier Life.
					</h2>
					<p className="mt-6 text-gray-600">
						Access to clean, healthy water is essential for your well-being. Our
						mission is to provide high-quality, purified water using advanced
						filtration systems that remove harmful impurities while preserving
						essential minerals.
					</p>
					<p className="mt-4 text-gray-600">
						With cutting-edge technology and rigorous quality checks, we ensure
						every drop meets the highest standards of safety and freshness.Join
						thousands who trust us for purity, taste, and peace of mind —
						because your health deserves nothing less.
					</p>

					{/* Button */}
					<div className="mt-8">
						<button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
							Read More
						</button>
					</div>
				</div>
			</section>
			<section className="bg-white py-16 px-4 md:px-10 text-center">
				{/* Title */}
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
					A Trusted Name In <br />
					Bottled Water Industry
				</h2>

				{/* Feature Items */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
					<FeatureCard
						icon={<Droplets size={40} className="text-cyan-400 mx-auto mb-4" />}
						title="Maxium Purity"
						desc="Delivers crystal-clear water by eliminating 99% of contaminants while retaining essential minerals."
					/>
					<FeatureCard
						icon={<Flame size={40} className="text-cyan-400 mx-auto mb-4" />}
						title="Cholorine Free"
						desc="Our advanced treatment process ensures your water is completely free from chlorine and harsh chemicals."
					/>
					<FeatureCard
						icon={
							<RefreshCw size={40} className="text-cyan-400 mx-auto mb-4" />
						}
						title="5 Steps Filtration"
						desc="Multi-layered filtration system removes impurities, odors, and bacteria to guarantee pure, safe water."
					/>
					<FeatureCard
						icon={
							<GlassWater size={40} className="text-cyan-400 mx-auto mb-4" />
						}
						title="Healthy Water"
						desc="Hydrate confidently with water that supports wellness, freshness, and a healthy lifestyle."
					/>
				</div>
			</section>
			<section className="relative bg-blue-800 text-white overflow-hidden">
				<div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
					{/* Left Text Content */}
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							Protect Your Family with <br />
							One of The Best Water <br />
							Filtering System.
						</h2>

						<div className="space-y-6">
							<div className="flex items-start">
								<CheckCircle className="text-cyan-400 w-6 h-6 mt-1 mr-3" />
								<div>
									<h4 className="font-semibold text-lg">Content Marketing</h4>
									<p className="text-sm text-white/80">
										Educate and inform customers with valuable, water-quality
										content tailored to their needs.
									</p>
								</div>
							</div>

							<div className="flex items-start">
								<CheckCircle className="text-cyan-400 w-6 h-6 mt-1 mr-3" />
								<div>
									<h4 className="font-semibold text-lg">Marketing Strategy</h4>
									<p className="text-sm text-white/80">
										Build trust and loyalty through transparent, effective water
										safety marketing strategies.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="md:w-1/2 relative mb-12 md:mb-0 flex justify-center">
						<div className="relative z-10 shadow-xl rounded-md overflow-hidden">
							<Image
								src="https://res.cloudinary.com/dalm60nrg/image/upload/v1750229826/bottle_djt6qi.jpg"
								alt="Water Bottle"
								width={350}
								height={350}
								className="object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Testimonials Carousel */}
			<section className="bg-blue-50 py-8 text-center">
				<h2 className="text-2xl font-bold text-blue-900 mb-6">
					What Our Clients are Saying About Suraksha
				</h2>

				<Carousel
					autoPlay
					infiniteLoop
					interval={2000}
					transitionTime={500}
					showThumbs={false}
					showStatus={false}
					stopOnHover={false}
				>
					{[
						{
							name: "Person1",
							role: "Designer",
							img: "https://res.cloudinary.com/dalm60nrg/image/upload/v1750229828/profile_man_fk5kcw.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person2",
							role: "Manager",
							img: "https://res.cloudinary.com/dalm60nrg/image/upload/v1750229828/profile_man_fk5kcw.jpg",
							message:
								"Trusted quality and excellent service from Suraksha. Highly recommended!",
						},
						{
							name: "Person3",
							role: "Designer",
							img: "https://res.cloudinary.com/dalm60nrg/image/upload/v1750229828/profile_man_fk5kcw.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person4",
							role: "Designer",
							img: "https://res.cloudinary.com/dalm60nrg/image/upload/v1750229828/profile_man_fk5kcw.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
						{
							name: "Person5",
							role: "Designer",
							img: "https://res.cloudinary.com/dalm60nrg/image/upload/v1750229828/profile_man_fk5kcw.jpg",
							message:
								"Suraksha delivers beyond expectations. Pure water with great taste!",
						},
					].map((review, idx) => (
						<div key={idx} className="flex justify-center">
							<div className="bg-white rounded-lg p-4 max-w-lg w-full text-left shadow">
								<div className="flex-col items-center gap-3 mb-2">
									<Image
										src={review.img}
										alt={review.name}
										width={200}
										height={200}
										className="rounded-full w-5 h-80"
									/>
									<p className="font-semibold text-blue-900 text-xl">
										{review.name}
									</p>
								</div>
								<p className="text-gray-700 leading-snug text-2xl">
									{review.message}
								</p>
							</div>
						</div>
					))}
				</Carousel>
			</section>
		</>
	);
}

function FeatureCard({ icon, title, desc }) {
	return (
		<div className="flex flex-col items-center px-4 group transition duration-300 ease-in-out">
			<div className="p-4 rounded-full border border-cyan-200 group-hover:shadow-lg group-hover:scale-110 transform transition duration-300">
				<div className="text-cyan-400 group-hover:text-cyan-500 transition duration-300">
					{icon}
				</div>
			</div>
			<h3 className="text-lg font-semibold text-gray-900 mt-4 group-hover:text-cyan-600 transition">
				{title}
			</h3>
			<p className="text-sm text-gray-500 mt-2">{desc}</p>
		</div>
	);
}
