import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
        <section class="section-services">
		<div class="container">
			<div class="row justify-content-center text-center">
				<div class="col-md-10 col-lg-8">
					<div class="header-section">
						<h2 class="title">Exclusive Services</h2>
						<p class="description">With our exclusive services, you'll unlock a world of possibilities and enjoy an elevated experience that surpasses your expectations. We believe in going the extra mile to ensure your satisfaction, and our exclusive services are a testament to that commitment.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
                                
							</span>
							<h3 class="title">Digital Marketing</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/digital-marketing" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-asymmetrik"></i>
							</span>
							<h3 class="title">Content creation and design</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/content-creation" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-artstation"></i>
							</span>
							<h3 class="title">Advertising and Advertisements</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/advertising" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fab fa-500px"></i>
							</span>
							<h3 class="title">Techinal Strategy plan</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/technical-strategy" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-chart-pie"></i>
							</span>
							<h3 class="title">Modelling photography</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/model-photography" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
				<div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Product photography</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/product-photography" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
                <div class="col-md-6 col-lg-4">
					<div class="single-service">
						<div class="content">
							<span class="icon">
								<i class="fas fa-laptop-code"></i>
							</span>
							<h3 class="title">Event photography</h3>
							<p class="description">Mauris volutpat urna tristique finibus iaculis. Morbi facilisis, justo eu vulputate elementum, est augue tincidunt ante, sed efficitur leo ligula vel velit.</p>
							<Link to="/event-photography" className="learn-more">Know More</Link>
						</div>
						<span class="circle-before"></span>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}

export default Services