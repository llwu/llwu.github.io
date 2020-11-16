import * as p5 from 'p5';
import { Matrix, EigenvalueDecomposition } from 'ml-matrix';
const viridis = require('scale-color-perceptual/viridis');

const BASE_FREQUENCY = 12;
const ROWS = 20;
const COLUMNS = 20;
const WIDTH = 20;
const HEIGHT = 20;
export const ELEMS = ROWS * COLUMNS;
const idx = (row: number, column: number) => (row * COLUMNS + column);

let eigendecomp: EigenvalueDecomposition | null = null;

const computeEigendecomp = () => {
  if (eigendecomp === null) {
    const laplacian = Matrix.zeros(ELEMS, ELEMS);
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        let deg = ((i > 0) ? 1 : 0) + ((i < ROWS - 1) ? 1 : 0) + ((j > 0) ? 1 : 0) + ((j < COLUMNS - 1) ? 1 : 0);
        laplacian.set(idx(i, j), idx(i, j), deg);
        if (i > 0) {
          laplacian.set(idx(i, j), idx(i - 1, j), -1.0);
        }
        if (i < ROWS - 1) {
          laplacian.set(idx(i, j), idx(i + 1, j), -1.0);
        }
        if (j > 0) {
          laplacian.set(idx(i, j), idx(i, j - 1), -1.0);
        }
        if (j < COLUMNS - 1) {
          laplacian.set(idx(i, j), idx(i, j + 1), -1.0);
        }
      }
    }
    eigendecomp = new EigenvalueDecomposition(laplacian);
  }
}

export interface EigenmodesProps {
  harmonic: number;
}

const Eigenmodes = (props: EigenmodesProps) => (sketch: p5) =>{
  let t = 0.0;
  computeEigendecomp();
  const eigenvalues = eigendecomp!.realEigenvalues;
  const eigenmodes = eigendecomp!.eigenvectorMatrix;
  let eigenmode = [...eigenvalues];  // just to copy the dimension

  sketch.setup = function setup() {
    sketch.createCanvas(WIDTH * COLUMNS, HEIGHT * ROWS);
  };

  sketch.draw = function draw() {
    t += 1.0 / 60;
    const { harmonic } = props;
    sketch.background(128);
    for (let i = 0; i < ELEMS; i++) {
      eigenmode[i] = eigenmodes.get(i, harmonic);
    }
    const magnitudes = eigenmode.map(Math.abs);
    const maxM = Math.max(...magnitudes);
    if (maxM > 0.01) {
      eigenmode = eigenmode.map(x => x / maxM);
    }

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLUMNS; j++) {
        const y = i * HEIGHT;
        const x = j * WIDTH;
        const e = eigenmode[idx(i, j)] * 0.5;
        const scalar = e * Math.sin(t * BASE_FREQUENCY * Math.sqrt(Math.max(eigenvalues[harmonic], 0))) + 0.5;

        sketch.push();
        sketch.fill(viridis(scalar));
        sketch.strokeWeight(0);
        sketch.rect(x, y, WIDTH, HEIGHT);
        sketch.pop();
      }
    }
  };
};

export default Eigenmodes;
