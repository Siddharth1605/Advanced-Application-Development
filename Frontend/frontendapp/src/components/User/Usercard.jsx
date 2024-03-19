import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import img1 from '../../assets/service1.jpg'
export function UserCard({img, heading, para}) {
  return (
    <Card className="w-full max-w-[48rem] flex-row" style={{backgroundColor:'#DDE6ED', padding:'10px', borderRadius:'10px'}}>
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src= {img}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="black" className="mb-4 uppercase text-black-100 font-2xl" style={{color:'black'}}>
          {heading}
        </Typography>
        
        <Typography color="gray" className="mb-8 font-normal">
          {para}
        </Typography>
        <a href="#" className="inline-block">
          <Link to="/booking"><Button variant="text" className="flex items-center gap-2">
            Book Service
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
          </Link>
        </a>
      </CardBody>
    </Card>
  );
}