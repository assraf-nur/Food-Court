import recommend from "../assets/Images/recommends.png";

export default function Recommends() {
  return (
    <div className="mt-12">
      <div>
        <p className="text-center text-yellow-600">
          <i>---Should Try---</i>
        </p>
        <div className="text-center order-banner mx-auto mb-12">
          <h2 className="text-3xl">_CHEF RECOMMENDS_</h2>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={recommend} alt="Shoes" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-semibold">Caeser Salad</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn mt-4 px-12 mx-auto text-white bg-[#EAB308]">
                    Add to card
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={recommend} alt="Shoes" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-semibold">Caeser Salad</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn mt-4 px-12 mx-auto text-white bg-[#EAB308]">
                    Add to card
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={recommend} alt="Shoes" />
              </figure>
              <div className="card-body text-center">
                <h2 className="text-3xl font-semibold">Caeser Salad</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn mt-4 px-12 mx-auto text-white bg-[#EAB308]">
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
