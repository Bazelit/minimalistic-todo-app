import { useTranslation } from "react-i18next";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  const {t} = useTranslation()

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
      <span>{t('Loading')}</span>
    </div>
  );
};

export default Loading;
