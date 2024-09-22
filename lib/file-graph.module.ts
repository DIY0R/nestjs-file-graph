import { Global, Module } from '@nestjs/common';
import { FileGraph } from 'file-graph';
import { FileGraphService } from './file-graph.service';

@Global()
@Module({})
export class NestjsFileGraph {
  static forRoot(path: string) {
    return {
      module: NestjsFileGraph,
      providers: [{ provide: FileGraphService, useValue: FileGraph(path) }],
      exports: [FileGraphService],
    };
  }
}
