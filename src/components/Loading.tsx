import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="loading">
      <TailSpin
        strokeWidth={3}
        visible={true}
        height="40"
        width="40"
        color="#8b8b93"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="tailSpin"
      />
      <span>Загрузка...</span>
    </div>
  );
};

export default Loading;
