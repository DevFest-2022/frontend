export const Account = ({accountData}) => {
    return (
        <div>
            <h3>{accountData.name}</h3>
            <div>@{accountData.handle}</div>
            <img src={accountData.photo}/>
        </div>
    );
}