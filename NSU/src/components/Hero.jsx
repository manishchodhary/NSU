import Button from "./button.jsx";

function Hero() {
  return (
    <section className="h-screen flex justify-center pt-[150px] font-poppins pr-[80px]">
      <div className=" flex-col text-left">
        <h1 className="font-extrabold text-6xl tracking-tight">Shut Up And Hit The Bong</h1>
        <p className="font-semibold text-[25px] pt-1">
          Ganja In Our Meditation And Ganja Is Our Cure
        </p>
        <p className="font-medium text-[16px]">
           Stop running behind blood sucking chicks <br />
           Stop fooling with fake-ass friends <br />
           And start your journey with us.{" "}
        </p>
        <p className="font-semibold text-[20px]">JOIN US AND START BEING RESPECTED IN THE COMMUNITY AND <br />START HAVING THE ACTUAL FUN. </p>
        <div className="flex gap-5 pt-6 ">
         <Button word={"JOIN US"}/>
         <h1 className="font-extrabold text-4xl tracking-tight">OR</h1>
           <Button word={"DIE A BITCH"}/>
      </div>
      </div>
    </section>
  );
}

export default Hero;
