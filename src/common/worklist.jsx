function WorkList({ src, position, company, date, description }) {
  return (
    <a>
    <p>{position}</p>
    <p>{description}</p>
    <p>{company}</p>
    <p>{date}</p>
    </a>
  );
}

export default WorkList;

