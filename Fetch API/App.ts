// interface UserData {id: number;avatar: string;first_name: string;last_name: string;email: string;}
// document.addEventListener("DOMContentLoaded", async () => {
//     const userListElement = document.getElementById("userList");
//     if (!userListElement) {
//       console.error("User list element not found");
//       return;
//     }
//     try {
//       const response = await fetch('https://reqres.in/api/users');
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       const data = await response.json();
//       const users: UserData[] = data.data;
  
//       users.forEach(user => {
//         const userCard = createUserCard(user);
//         userListElement.appendChild(userCard);
//       });
//     } catch (error) {
//       console.error('Error fetching and rendering users:', error);
//     }
   
//   });
//   async function showUserDetails(userId: number) {
//     try {
//       const response = await fetch(`https://reqres.in/api/users/${userId}`);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       const user: UserData = data.data;

//       alert(`User Details:\nID: ${user.id}\nFirst Name: ${user.first_name}\nLast Name: ${user.last_name}\nEmail: ${user.email}`);
//     } catch (error) {
//       console.error('Error fetching user details:', error);
//     }
//   }
//   function createUserCard(user: UserData) {
//     const userCard = document.createElement("div");
//     userCard.className = "user-card";
//     userCard.innerHTML = `
//       <img src="${user.avatar}" alt="User Image" onclick="showUserDetails(${user.id})">
//       <p>${user.first_name} ${user.last_name}</p>
//       <p>${user.email}</p>
//     `;
//     return userCard;
//   }

interface IUserData {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

class UserManager {
  private userListElement: HTMLElement | null;

  constructor() {
    this.userListElement = document.getElementById("userList");
    if (!this.userListElement) {
      console.error("User list element not found");
      return;
    }
  }

  public async initialize() {
    try {
      const users = await this.fetchUsers();
      users.forEach(user => {
        const userCard = this.createUserCard(user);
        this.userListElement!.appendChild(userCard);
      });
    } catch (error) {
      console.error('Error fetching and rendering users:', error);
    }
  }

  public async fetchUsers(): Promise<IUserData[]> {
    try {
      const response = await fetch('https://reqres.in/api/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  public async showUserDetails(userId: number){
    try {
      const user = await this.fetchUserDetails(userId);
      this.displayUserDetails(user);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  }

  public async fetchUserDetails(userId: number): Promise<IUserData> {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      throw error;
    }
  }

  public displayUserDetails(user: IUserData):void  {
    alert(`User Details:\nID: ${user.id}\nFirst Name: ${user.first_name}\nLast Name: ${user.last_name}\nEmail: ${user.email}`);
  }

  public createUserCard(user: IUserData): HTMLDivElement {
    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <img src="${user.avatar}" alt="User Image" onclick="userManager.showUserDetails(${user.id})">
      <p>${user.first_name} ${user.last_name}</p>
      <p>${user.email}</p>
    `;
    return userCard;
  }
}

const userManager = new UserManager();
document.addEventListener("DOMContentLoaded", () => userManager.initialize());
