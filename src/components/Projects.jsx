

const Project = ({project,key}) => {

        const {name, description, image,tags,link} = project;
  return (
    <>
    <a href={link} target="_blank" rel="noreferrer" className="flex justify-center">
      <div className="card w-5/6 bg-base-100 shadow-2xl  ease-in duration-300 delay-150 hover:ring ring-purple-500 ">
        <figure className="max-h-56">
      
          <img
            src={image}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">
            {name}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline badge-secondary truncate">{tags}</div>
          </div>
        </div>
      </div>
      </a>
    </>
  );
};

export default Project;
