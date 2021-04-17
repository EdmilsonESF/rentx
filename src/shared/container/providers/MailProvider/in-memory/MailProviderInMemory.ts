import { IMailProvider } from "../IMailProvider";

class MailProviderInMemory implements IMailProvider {
  private messge: any[] = [];

  async sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string
  ): Promise<void> {
    this.messge.push({
      to,
      subject,
      variables,
      path,
    });
  }
}

export { MailProviderInMemory };
