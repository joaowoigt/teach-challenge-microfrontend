import Text from "@/UI/components/Texts/texts";

// todo: delete
export default function DashboardExtractHeading() {
  return (
    <div className="flex flex-row justify-between">
      <Text intent="Heading" color="black" text="Extrato" style="bold"></Text>
      <div className="flex flex-row">
        <div className="bg-primary mr-medium w-fit rounded-full p-small items-center justify-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7445 1.60221L20.3932 1.25094C19.5082 0.365899 18.0712 0.365899 17.1816 1.25094L2.52372 15.9088C2.52372 15.9088 2.5146 15.9179 2.5146 15.9225C2.49179 15.9498 2.46898 15.9772 2.45529 16.0137C2.45529 16.0137 2.44617 16.0228 2.44617 16.0274L1.5292 18.4863L0.612224 20.9407C0.566604 21.0685 0.593976 21.2053 0.689779 21.3011C0.75821 21.3695 0.844889 21.4015 0.93613 21.4015C0.972626 21.4015 1.01825 21.3924 1.05474 21.3787L3.50912 20.4617L5.9635 19.5402H5.97263L5.98175 19.531C6.01825 19.5128 6.05018 19.4945 6.07755 19.4672C6.07755 19.4672 6.08668 19.4672 6.08668 19.4581L20.7491 4.79564C21.1779 4.36681 21.4151 3.79656 21.4151 3.18524C21.4151 2.57393 21.1825 2.0128 20.7491 1.5794L20.7445 1.60221ZM1.51095 20.4845L1.98084 19.2345L2.76551 20.0192L1.51095 20.4845ZM3.46806 19.75L2.24087 18.5228L2.89781 16.771L5.21989 19.0977L3.46806 19.75ZM18.9745 5.61225L16.3832 3.02101L16.9307 2.47356L19.5219 5.0648L18.9745 5.61225ZM20.2609 4.32575L20.01 4.58123L17.4188 1.98999L17.6697 1.73451C18.2901 1.11864 19.2938 1.11864 19.9142 1.73451L20.2655 2.09035C20.5666 2.38688 20.7308 2.78834 20.7308 3.20805C20.7308 3.62776 20.5666 4.02922 20.2655 4.33031L20.2609 4.32575Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bg-primary w-fit rounded-full p-small items-center justify-center">
          <svg
            className="w-[24px] h-[24px] text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}