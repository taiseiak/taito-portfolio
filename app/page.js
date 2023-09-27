import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-300">
      {/* mask */}
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-screen w-full">
        <div className="absolute left-0 top-0 h-20 w-full bg-slate-300 opacity-100" />
        <div className="absolute bottom-0 left-0 h-20 w-full bg-slate-300 opacity-100" />
      </div>
      {/* frame */}
      <div className="pointer-events-none fixed bottom-20 left-20 right-20 top-20 z-10">
        {/* bottom line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-black" />
        {/* left line */}
        <div className="absolute left-0 top-0 h-full w-px bg-black" />
        {/* right line */}
        <div className="absolute right-0 top-0 h-full w-px bg-black" />
        {/* top line */}
        <div className="absolute left-0 top-0 h-px w-full bg-black" />
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="inset-3 m-20 grow bg-emoi bg-cover">
          <div className="m-20 animate-tracking-in-contract text-4xl text-slate-700">
            Taisei Klasen
          </div>
          <div className="m-20 text-2xl text-slate-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            nibh eget arcu facilisis tincidunt et at sem. Maecenas facilisis
            elit eros, sed vestibulum arcu maximus ut. Ut fermentum scelerisque
            mauris, vel gravida nulla volutpat et. Phasellus luctus turpis a
            arcu dictum malesuada. Integer justo neque, feugiat in tincidunt sit
            amet, sagittis nec erat. In scelerisque pharetra eleifend. Nam non
            sollicitudin erat. Quisque suscipit arcu lacinia condimentum
            feugiat.
          </div>

          <div className="m-20 text-2xl text-slate-900">
            Pellentesque a nunc rutrum, fringilla eros quis, lacinia dui. Donec
            sollicitudin ex libero, nec sollicitudin purus consequat id. Etiam
            elementum a justo ut dictum. Nullam quis tincidunt augue, ac
            interdum lectus. Vivamus cursus ante quis magna consectetur, ac
            venenatis metus rutrum. Quisque sodales tortor ex, sit amet
            ultricies nisi convallis vitae. Curabitur ante ex, scelerisque a
            risus auctor, efficitur venenatis diam. Nam urna velit, ultricies
            sodales ipsum vitae, pulvinar dictum nisl. Phasellus tincidunt,
            augue a pellentesque placerat, lacus massa aliquam augue, eget
            ornare eros magna sollicitudin nulla. Maecenas interdum pharetra
            eros a tincidunt. Mauris et felis eleifend lacus varius fermentum
            non non tortor. Phasellus condimentum neque non mi rutrum, vitae
            faucibus nisl laoreet. Maecenas suscipit sit amet felis sed gravida.
          </div>

          <div className="m-20 text-2xl text-slate-900">
            Maecenas hendrerit cursus gravida. Proin a magna sem. Nunc nisi
            nibh, bibendum non molestie quis, aliquet vel ipsum. Donec porta,
            nunc et suscipit suscipit, nunc ex porttitor nisi, suscipit
            consequat neque urna a arcu. Quisque sagittis mattis leo mattis
            egestas. Donec rhoncus justo quis nunc eleifend, in porttitor purus
            commodo. Curabitur non feugiat magna. Phasellus pellentesque pretium
            efficitur. Curabitur lobortis convallis viverra. Phasellus
            scelerisque ligula diam, nec dignissim turpis pretium sit amet. Sed
            molestie risus id felis viverra tincidunt. Sed vehicula suscipit
            arcu, in lacinia tellus suscipit eu. Suspendisse potenti. Vivamus id
            tempus nunc. Integer ut volutpat magna.
          </div>

          <div className="m-20 text-2xl text-slate-900">
            Ut non mauris hendrerit velit egestas iaculis. Duis at porta lorem.
            Integer ut maximus leo. In maximus risus vitae risus efficitur
            convallis. Cras interdum justo id dictum mollis. Morbi dolor lacus,
            tincidunt id mauris eu, tempor commodo leo. Maecenas vel ipsum ac
            lorem viverra ornare. Proin a gravida urna.
          </div>

          <div className="m-20 text-2xl text-slate-900">
            Nunc eleifend, augue sit amet hendrerit porta, arcu velit varius
            neque, vitae aliquet ipsum turpis ac est. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Quisque lorem quam, varius nec libero eu, sodales ornare
            turpis. Aliquam ut eros ante. Praesent ut mollis elit. Morbi sit
            amet neque vitae augue ullamcorper rhoncus. Nam quis elementum
            sapien.
          </div>

          <div className="m-20 text-2xl text-slate-900">
            Proin sit amet massa non enim fringilla iaculis ut a est. Donec
            gravida neque nec leo ultrices, eget ornare elit commodo. Aliquam at
            varius quam. Aliquam blandit erat vitae mauris mollis, sit amet
            laoreet felis gravida. Donec luctus tristique metus, varius sodales
            felis auctor non. Integer non sodales libero. Integer ut convallis
            nulla. Sed ligula dui, tempor non dapibus non, suscipit a lorem.
            Fusce feugiat, tellus nec lacinia accumsan, dolor tortor eleifend
            felis, non finibus nunc ipsum ut ex. Donec lacinia id justo eu
            finibus. Donec justo ipsum, pharetra in arcu in, porttitor dictum
            ipsum. Cras arcu diam, malesuada vel augue in, tincidunt auctor
            eros. Sed id erat augue. Morbi dictum dui quis turpis rhoncus
            tristique. Nam ut scelerisque felis, a pharetra leo.
          </div>
        </div>
      </div>
    </div>
  );
}
