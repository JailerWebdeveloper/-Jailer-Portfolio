const Course = ({course,key}) => {

    const {name,image,date,description} = course;
return (
<>
  <div className="card max-w-xs mx-auto h-full bg-base-100 shadow-lg  my-5 hover:shadow-purple-500/50 hover:-translate-y-2  transition duration-200 ease-linear">
    <figure className="max-h-56">
      <img
        src={image}
        alt="image"
      />
    </figure>
    <div className="card-body text-end">
      <h2 className="card-title justify-end text-white">
        {name}
      </h2>
      <p className="text-sm text-base-content text-opacity-60">
       {description}
      </p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline badge-secondary truncate">{date}</div>
      </div>
    </div>
  </div>
</>
);
};

export default Course;
