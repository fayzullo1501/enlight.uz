import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import DetailsInfo from "../components/details/DetailsInfo";
import MentorInfo from "../components/details/MentorInfo";
import CourseDetails from "../components/details/CourseDetails";
import ApplyForm from "../components/ApplyForm";

function DetailsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Enlight — {t("courses.more")}</title>
        <meta name="description" content="Подробная информация о курсе: программа, ментор, длительность, формат, цена." />
        <meta property="og:title" content="Подробности курса — Enlight" />
        <meta property="og:description" content="Узнайте всё о выбранном курсе в Enlight. Ментор, программа и запись." />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
      </Helmet>

      <div>
        <DetailsInfo />
        <MentorInfo />
        <CourseDetails />
        <ApplyForm />
      </div>
    </>
  );
}

export default DetailsPage;
