import { Test } from '@nestjs/testing';
import { FileGraphService, NestjsFileGraph } from '../lib';

describe('CatsController', () => {
  let fileGraphService: FileGraphService;
  const data = { name: 'Diy0r', age: new Date().toString() };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [NestjsFileGraph.forRoot('data.txt')],
    }).compile();

    fileGraphService = moduleRef.get<FileGraphService>(FileGraphService);
  });

  test('create a vertex and find test by ID', async () => {
    const createdVertex = await fileGraphService.createVertex(data);
    const foundVertex = await fileGraphService.findOne<typeof data>(
      vertex => vertex.id === createdVertex.id,
    );
    expect(foundVertex).toEqual({ id: createdVertex.id, data, links: [] });
  });
});

//full test here https://github.com/DIY0R/file-graph/blob/main/test/graph.test.ts
