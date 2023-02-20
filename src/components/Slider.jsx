import React from 'react'

const companySeq = Array.from({ length: 12 }, (_, i) => i + 1)
const Slider = () => {
  return (
    <section className="mx-auto max-w-7xl px-8">
      <h2 className="mb-8 text-center font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
        Our Partners
      </h2>
      <div class="slider">
        <div class="slide-track">
          {companySeq.map((seq) => (
            <div
              className="slide"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img src={`company${seq}.jpeg`} className="h-full" alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Slider
