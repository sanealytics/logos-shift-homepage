import React, {useState, useRef} from 'react';
//import {
//  Link,
//  useNavigate,
//} from 'react-router-dom';
// import MermaidDiagram from './logosswitch/MerMaid';
// import '../index.css'

// MOCKS
const Link = ({to, children}) => (<>{children}</>)
const useNavigate = function(path){return console.log(`Navigate to ${path}`)}


// TODO: Try with new Hero Image
// npm install @tailwindcss/aspect-ratio
//tailwind.config.js
//module.exports = {
//  plugins: [
//    require('@tailwindcss/aspect-ratio'),
//  ],
//}


const IMAGES = {
  instrument : 'https://images.bohita.com/static/logoshift/homepage/logoshift-homepage-instrument.webp',
  insurance: 'https://images.bohita.com/static/logoshift/homepage/logoshift-homepage-insurance.webp',
  rollout: 'https://images.bohita.com/static/logoshift/homepage/logoshift-homepage-rollout.webp',
  seamless: 'https://images.bohita.com/static/logoshift/homepage/logoshift-homepage-seamless.webp',
}

const calendarEmbedCode = '<iframe></iframe>'


const Hero = () => (
  <div className="relative h-screen overflow-hidden">
    {/* Image */}
    <img
        src="https://images.bohita.com/static/api/Serene-Digital-Realm.webp"
        alt="Hero Image"
        className="absolute top-0 left-0 w-full h-full object-cover backdrop-blur-md"
    />
    {/* Text overlayed on the image */}
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="font-heading text-heading text-accent text-5xl mb-4 bg-black bg-opacity-50 px-4 py-2 rounded">
            Effortless Training and Rollout of Fine-Tuned Models
        </h1>
        <p className="font-body text-body text-xl bg-black bg-opacity-50 px-4 py-2 rounded">
            Finetune and roll out with a single line of code.
        </p>
    </div>
  </div>
)

const GHLink = () => (
  <a href="https://github.com/virevolai/logos-shift-client/" target="_blank" rel="noopener noreferrer" className="absolute bottom-8 right-8 flex items-center space-x-2 bg-black bg-opacity-50 px-3 py-2 rounded">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" className="w-6 h-6" />
    <span className="font-body text-white">View on GitHub</span>
  </a>
)

const HowItWorks = () => (
  <div className="bg-secondary-200 py-16">
    <div className="container mx-auto text-center">
        <h2 className=" text-2xl font-semibold text-accent mb-8">How It Works</h2>

        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex-1 px-4">
                <h3 className="font-heading text-heading text-accent mb-4">1. Instrument Your Function</h3>
                <p className="font-body text-body">
                    Simply integrate Logos Shift with your existing systems. Capture insights into function inputs, outputs, and metadata.
                </p>
            </div>
            <div className="flex-1 px-4">
                {/* Placeholder for diagram or icon */}
                <img className="w-32 h-32 bg-gray-300 mx-auto mb-4 rounded-full" src={IMAGES.instrument} />
            </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mb-8">
            <div className="flex-1 px-4">
                <h3 className="font-heading text-heading text-accent mb-4">2. Automated Model Rollout</h3>
                <p className="font-body text-body">
                    Logos Shift's unique automated rollout feature will notify you when your fine-tuned model is ready for deployment.
                </p>
            </div>
            <div className="flex-1 px-4">
                {/* Placeholder for diagram or icon */}
                <img className="w-32 h-32 bg-gray-300 mx-auto mb-4 rounded-full" src={IMAGES.rollout} />
            </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 px-4">
                <h3 className="font-heading text-heading text-accent mb-4">3. Enjoy Effortless Integration</h3>
                <p className="font-body text-body">
                    Benefit from seamless transitions between models, enhanced performance, and significant cost savings.
                </p>
            </div>
            <div className="flex-1 px-4">
                {/* Placeholder for diagram or icon */}
                <img className="w-32 h-32 bg-gray-300 mx-auto mb-4 rounded-full" src={IMAGES.seamless} />
            </div>
        </div>

    </div>
  </div>
)

const Pricing = ({ handleContactMe, handleStart }) => (
    <div className="bg-base-100 pb-10">
      <div className="container mx-auto text-center text-base-content">
        <h2 className="text-primary font-bold text-2xl mb-8">Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Free Tier */}
          <div className="bg-base-300 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-secondary mb-4">Free Tier</h3>
            <ul className="font-body text-body list-disc list-inside mb-4">
              <li>Up to 1,000 API calls/month</li>
              <li>1GB of data transfer/month</li>
              <li>No Credit Card Required</li>
            </ul>
            <div className="mt-4">
              <button className="btn-primary px-6 py-3 rounded-full" onClick={handleStart}>Get Started</button>
            </div>
          </div>

          {/* Pay-Per-Use */}
          <div className="bg-base-300 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-secondary mb-4">Pay-Per-Use</h3>
            <ul className="font-body text-body list-disc list-inside mb-4">
              <li>$0.01 per 1,000 API calls</li>
              <li>$10 per month</li>
              <li>Eligible for Finetuned model and Auto Rollouts</li>
            </ul>
            <div className="mt-4">
              <button className="btn-primary px-6 py-3 rounded-full" onClick={handleStart}>Get Started</button>
            </div>
          </div>

          {/* Model Training */}
          <div className="bg-base-300 p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg text-secondary mb-4">Model Training</h3>
            <p className="font-body text-body mb-4">
              Get a personalized quote based on your data size and complexity. Approval required before proceeding.
            </p>
            <div className="mt-4">
              <button className="btn-primary px-6 py-3 rounded-full" onClick={handleContactMe}>Contact Sales</button>
            </div>
          </div>

          <div className="bg-base-300 p-6 rounded-lg shadow-md mt-8">
            <h3 className="font-semibold text-lg text-secondary mb-4">Prediction Endpoints</h3>
            <ul className="font-body text-body list-disc list-inside mb-4">
              <li>Tiered pricing based on GPU usage</li>
              <li>Low-latency options available</li>
              <li>Contact us for SLA guarantees</li>
              <li>Auto rollouts with A/B testing</li>
            </ul>
            <div className="mt-4">
              <button className="btn-primary px-6 py-3 rounded-full" onClick={handleContactMe}>Contact Sales</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
)



export default function HomePage() {

  const [showCalendar, setShowCalendar] = useState(false)
  const navigate = useNavigate();
  const contactRef = useRef(null);

  const handleContactMe = () => {
    setShowCalendar(true)
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const handleStart = () =>
    navigate('/login')

  return (
    <>

    {/* Hero Section */}
    <Hero />

    <div className="bg-gradient-to-r from-primary to-secondary min-h-screen text-primary-content p-8">
      <div className="container mx-auto">

        {/* Pain Section */}
        <div className="py-8">
          <h2 className=' text-accent font-bold text-xl mb-4'>
            The LLM Challenge
          </h2>
          <p className="font-body text-body">
            Deploying and managing Large Language Models in production isn’t just about integration. It’s about agility, efficiency, and scalability. And with most tools, it feels like fitting a square peg in a round hole.
          </p>
        </div>

        {/* Agitate Section */}
        <div className="py-8">
          <h2 className=' text-accent font-bold text-xl mb-4'>
            It's Not Just About Latency
          </h2>
          <p className="font-body text-body">
            It's the hours spent in configuration, the unpredictability of rollouts, and the missed opportunities with inefficient models. The cost isn't just computational; it's in lost innovation and potential.
          </p>
        </div>

        {/* Solution Section */}
        <div className="py-8">
          <h2 className=' text-accent font-bold  text-2xl mb-4'>
            Meet Logos Shift
          </h2>
          <p className="font-body text-body mb-8">
            Your one-stop solution for effortless LLM integration. With a unique automated rollout feature, Logos Shift notifies you when your fine-tuned model is ready.
            <p className="mt-4 text-lg">
              No manual intervention. <br />
              No complex setups. <br/>
              Just pure simplicity.
            </p>
          </p>
          <p className="font-body text-body">
            Logos Shift powers <a href="https://bohita.com" className="underline">Bohita</a> - the world's first generative commerce product that relies heavily on LLMs.
          </p>
        </div>

        <div className="text-center py-16">
          <Link to={'/login'} >
            <button className="btn btn-secondary btn-xl">
              Dive into the Future
            </button>
          </Link>
        </div>

        <HowItWorks />

        <div className="text-center py-16">
          <Link to={'/login'} >
            <button className="btn btn-secondary mt-8 px-6 py-3 rounded-full">Get Started</button>
          </Link>
        </div>

        <div className="py-16">
          <h2 className=' text-center text-accent font-bold  text-2xl mb-4'>
            Architecture
          </h2>

          {/* <MermaidDiagram/> */}

          <div className=" text-center">
            <a href="https://github.com/virevolai/logos-shift-client/" target="_blank" className="hover:underline ">see the code</a>
          </div>
        </div>

        {/* Insurance */}
        <div className="py-16">
          <div className="container mx-auto text-center">
              <h2 className=' text-accent font-bold  text-2xl mb-8'>Reliability and Insurance</h2>

              <div className="flex flex-col md:flex-row items-center justify-between">
                  {/* Content */}
                  <div className="flex-1 px-4">
                      <p className="font-body text-body mb-6">
                          In the unpredictable landscape of live applications, interruptions can be costly. With Logos Shift, you're always covered.
                      </p>
                      <p className="font-body text-body mb-6">
                          If the primary service encounters issues, or if performance is degraded, your customers won't feel the difference. They'll automatically receive service from your fine-tuned model, ensuring a seamless experience.
                      </p>
                      <p className="font-body text-body">
                          This redundancy isn't just about maintaining service; it's about guaranteeing the highest quality experience for your users, every time.
                      </p>
                  </div>
                  <div className="flex-1 px-4">
                      <img className="w-64 h-64 bg-gray-300 mx-auto rounded-full" src={IMAGES.insurance} />
                  </div>
              </div>
          </div>
        </div>

        <Pricing handleContactMe={handleContactMe} handleStart={handleStart} />

        {/* Contact us */}
        <div className="py-16">
          <div className="container mx-auto text-center">
              <h2 className=' text-accent font-bold  text-2xl mb-8'>Expert Consulting</h2>
              <p className="font-body text-body mb-6">
                  Need specialized guidance? Our team is available for consulting to ensure you get the most out of Logos Shift and Large Language Models.
              </p>
              <div ref={contactRef}>
                {!showCalendar ? (
                  <button className="btn btn-secondary mt-4 px-6 py-3 rounded-full" onClick={handleContactMe}>Contact Us</button>
                ) : (
                  <div
                    className='iframe-container min-h-full'
                    dangerouslySetInnerHTML={{ __html: calendarEmbedCode}}
                  />
                )}
              </div>
          </div>
        </div>


        <div>
          <GHLink />
        </div>
      </div>
    </div>
    </>
  );
}
