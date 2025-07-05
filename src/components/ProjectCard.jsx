function ProjectCard() {
  return (
    <>
      <div class="card col-8 col-md-5 rounded-3 p-0 border-4 border-darkPurple">
        <img
          class="card-img-top rounded-top-3"
          src="/img/comingSoon.png"
          alt="Title"
          className="object-fit-cover card-img-top"
          height={250}
        />
        <div class="card-body rounded-bottom-3 d-none">
          <h4 class="card-title">Title</h4>
          <p class="card-text">Body</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
