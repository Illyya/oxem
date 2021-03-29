export async function tableDataQuery(amountOfInformation) {

  if (amountOfInformation === 'small') {
    const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    try {
      const response = await fetch(url);

      return await response.json();
    } catch (error) {
      alert(error)
    }
  } else {
    const url = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    try {
      const response = await fetch(url);

      return await response.json();
    } catch (error) {
      alert(error)
    }
  }
}