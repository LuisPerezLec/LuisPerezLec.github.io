import styles from "./styles.js";

export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <head></head>
      <main>
        <div className={`flex md:flex-row flex-col md:${styles.paddingY+ ' ' +styles.flexCenter} hero-background py-16`}>
          <div className={`bg-white rounded-tl-lg rounded-br-lg w-[80%] xs:w-[440px] p-8`}>
            <div>
              <img src="https://picsum.photos/200" className="rounded-full"/>
            </div>
            <div>Nombre</div>
          </div>
          <div>Lado derecho</div>
        </div>
      </main>
    </div>
  )
}