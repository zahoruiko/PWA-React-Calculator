import React from 'react';

import Button from '../Button';
import ButtonsWrapper from '../ButtonsWrapper';
import CalculatorDisplay from '../CalculatorDisplay';
import CalculatorTitle from '../CalculatorTitle';
import CalculatorUIWrapper from '../CalculatorUIWrapper';
import CalculationsList from '../CalculationsList';

import styles from './styles.module.css';

function CalculatorUI({
  calculationsListData,
  inputField,
  handleClearAllButton,
  handleClearLastButton,
  handlePercentButton,
  handleOperationButton,
  handleNumberButton,
  handlePlusMinusButton
}) {
  return (
    <div className={styles.mainWrapper}>
      <CalculatorUIWrapper>
        <CalculatorTitle />
        <CalculationsList data={calculationsListData} />
        <CalculatorDisplay data={inputField} />
        <ButtonsWrapper>
          <Button
            handler={() => handleClearAllButton()}
            buttonTitle={'C'}
            optionalStyle={styles.clearButton}
          />
          <Button
            handler={() => handleClearLastButton()}
            buttonTitle={'BS'}
            optionalStyle={styles.clearButton}
          />
          <Button
            handler={() => handlePercentButton('%')}
            buttonTitle={'%'}
            optionalStyle={styles.operationButton}
          />
          <Button
            handler={() => handleOperationButton('+')}
            buttonTitle={'+'}
            optionalStyle={styles.operationButton}
          />

          <Button
            handler={() => handleNumberButton('7')}
            buttonTitle={'7'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('8')}
            buttonTitle={'8'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('9')}
            buttonTitle={'9'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleOperationButton('-')}
            buttonTitle={'-'}
            optionalStyle={styles.operationButton}
          />

          <Button
            handler={() => handleNumberButton('4')}
            buttonTitle={'4'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('5')}
            buttonTitle={'5'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('6')}
            buttonTitle={'6'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleOperationButton('x')}
            buttonTitle={'x'}
            optionalStyle={styles.operationButton}
          />

          <Button
            handler={() => handleNumberButton('1')}
            buttonTitle={'1'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('2')}
            buttonTitle={'2'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('3')}
            buttonTitle={'3'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleOperationButton('/')}
            buttonTitle={'/'}
            optionalStyle={styles.operationButton}
          />

          <Button
            handler={() => handleNumberButton('0')}
            buttonTitle={'0'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handleNumberButton('.')}
            buttonTitle={'.'}
            optionalStyle={styles.numberButton}
          />
          <Button
            handler={() => handlePlusMinusButton('+/-')}
            buttonTitle={'+/-'}
            optionalStyle={styles.operationButton}
          />
          <Button
            handler={() => handleOperationButton('=')}
            buttonTitle={'='}
            optionalStyle={styles.operationButton}
          />
        </ButtonsWrapper>
      </CalculatorUIWrapper>
    </div>
  );
}

export default CalculatorUI;
