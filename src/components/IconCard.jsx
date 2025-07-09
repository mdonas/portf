export default function IconCard({ icon, label }) {
  return (
    <div className="p-3 m-2 col-lg-3 col-md-5 col-8 shadow-lg-light rounded-5 border card-hover-effect">
      <div className="row justify-content-center align-items-center">
        <div className="col-3 text-center text-darkPurple">{icon}</div>
        <div className="col-6 fw-bold text-center text-white fs-5">{label}</div>
      </div>
    </div>
  );
}
