# NestJS File-Graph Wrapper

This package provides a wrapper for integrating the [file-graph](https://www.npmjs.com/package/file-graph) library with NestJS.

## Installation

To install this package, use npm:

```bash
npm install nestjs-file-graph
```

## Module Setup

To set up the `nestjs-file-graph` library in your NestJS project, follow these steps:

1. Import `NestjsFileGraph` into your module:

```typescript
import { Module } from '@nestjs/common';
import { NestjsFileGraph } from 'nestjs-file-graph';

@Module({
  imports: [NestjsFileGraph.forRoot('graph.txt')],
})
export class AppModule {}
```

Replace `'graph.txt'` with the path to your file where graph data will be stored.

## Using the Service

After setting up the module, you can use the `FileGraphService` in your controller or service. Here’s an example of usage:

```typescript
import { Controller, Get } from '@nestjs/common';
import { FileGraphService } from 'nestjs-file-graph';

@Controller('cats')
export class CatsController {
  constructor(private readonly fileGraphService: FileGraphService) {}

  @Get()
  async createAndFindVertex() {
    const data = { name: 'Diy0r', city: 'LA' };
    const createdVertex = await this.fileGraphService.createVertex(data);
    const foundVertex = await this.fileGraphService.findOne(vertex => vertex.id === createdVertex.id);
    return foundVertex;
  }
}
```
## Documentation

For detailed documentation on all methods and usage of the [file-graph](https://www.npmjs.com/package/file-graph) library !
