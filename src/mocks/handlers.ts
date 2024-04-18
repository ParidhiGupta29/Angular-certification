import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';
import { Movies } from '../app/model/dataTypes';

export const handlers =[
     http.get('/movies', (req , res) => {
        const mockMovie = new Array(8).fill(null).map(() => ({
            id: faker.number.int(),
            movieName: faker.internet.displayName(),
            director: faker.person.fullName(),
            desc: faker.random.words(),
            image: faker.image.image(),
            year: faker.date.past().getFullYear()
          }));
         return res.json(mockMovie);
         }),

         http.get('/movies/:id', (req , res) => {
          const id= req.id
          const mockMovie = new Array(8).fill(null).map(() => ({
              id: faker.number.int(),
              movieName: faker.internet.displayName(),
              director: faker.person.fullName(),
              desc: faker.random.words(),
              image: faker.image.image(),
              year: faker.date.past().getFullYear()
            }));
           return res.json(mockMovie);
           }),
        ]
