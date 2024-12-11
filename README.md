# Thoughtful Takehome

This project contains a function that determines how to classify packages in a robotic automation factory based on their dimensions and weight. The function returns one of three classifications: `STANDARD`, `SPECIAL`, or `REJECTED`.

## Assumptions

- This is not a full-fledge package (not executable via CLI nor downloadable via npm).

## Development

### Requirements

- **Node.js**: Version 22.12.0. (see `.nvmrc`)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sahellebusch/thoughtful
   cd thoughtful
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

The main function is defined in `src/sort-package.ts`:

```typescript
import { sort } from "./sort-package";

console.log(sort(5, 6, 7, 25)); // Output: "SPECIAL"
```

## Testing

To run the test suite:

```bash
npm run test
```
