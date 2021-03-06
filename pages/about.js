import Layout from 'hoc/Layout.component'
import { data } from '../data/about'


const About = () => (
  <Layout
    title='Hacker News Next'
    description='Hacker News clone made with Next.js'
  >
    <div className='min-h-screen flex items-center -m-16'>

      <div className="py-20 px-10 bg-white rounded-sm shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <p className="text-base leading-6 text-orange font-semibold tracking-wide uppercase">Next js</p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Hacker News Clone </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            { data.map(d => (
              <li key={d.id}>
                <div className="flex">
                  <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white">
                        <img src={d.src} alt={d.alt} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">{d.title}</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
             ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About